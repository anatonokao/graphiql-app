import React, { FC, lazy, Suspense, useState } from 'react';
import CodeEditorPanel from '@/components/GraphQl/CodeEditorPanel/CodeEditorPanel.tsx';
import ResultPanel from '@/components/GraphQl/ResultPanel/ResultPanel.tsx';
import styles from './MobileLayout.module.scss';
import VariablesPanel from '@/components/GraphQl/VariablesPanel/VariablesPanel.tsx';
import HeadersPanel from '@/components/GraphQl/HeadersPanel/HeadersPanel.tsx';
import { TabList, TabPanel, Tabs, Tab } from 'react-tabs';
import InputUrlApi from '@/components/GraphQl/InputUrlApi/InputUrlApi.tsx';
import RunBtn from '@/components/GraphQl/RunBtn/RunBtn.tsx';
import Prettifyer from '@/components/GraphQl/Prettifyer/Prettifyer.tsx';
import Loader from '@/components/common/Loading/Loader/Loader.tsx';
import { IntrospectionQuery } from 'graphql/utilities';

type MobileLayoutProps = {
  data: IntrospectionQuery | undefined;
  isFetching: boolean;
  isError: boolean;
};

const MobileLayout: FC<MobileLayoutProps> = ({ data, isFetching, isError }) => {
  const [isDocPanelOpen, setIsDocPanelOpen] = useState(false);
  const toggleDoc = () => {
    setIsDocPanelOpen((prevState) => !prevState);
  };

  const DocPanel = lazy(
    () => import('@/components/GraphQl/DocPanel/DocPanel.tsx'),
  );

  return (
    <>
      <div className={styles.ide} data-testid="MobileLayout">
        <InputUrlApi />
        {!isFetching ? (
          isError ? (
            <div className={styles.error}>
              <div className={styles.errorTitle}>
                Oops, seems something went wrong!
              </div>
              <div className={styles.errorText}>
                Maybe our coders forgot to eat, and now they are not performing
                at their best. We are already feeding them cookies 🍪, but just
                to be sure, please check that the server link is correct, the
                server is work, and it supports GraphQL queries.
              </div>
            </div>
          ) : (
            <div className={styles.ideContainer}>
              <button
                type="button"
                onClick={toggleDoc}
                className={styles.docToggler}
                title="Docs"
                data-testid="MobileLayout-DocToggler"
              >
                <img src="src/assets/doc-btn.svg" alt="docs" />
                Docs
              </button>

              {isDocPanelOpen && (
                <>
                  <div className={styles.docPanel}>
                    <button
                      type="button"
                      onClick={toggleDoc}
                      className={styles.closeBtn}
                      title="Docs"
                    >
                      ✖️
                    </button>
                    <Suspense fallback={<Loader />}>
                      <DocPanel schema={data} />
                    </Suspense>
                  </div>
                </>
              )}
              <div className={styles.panel}>
                <div className={styles.header}>
                  <h5 className={styles.panelTitle}>Operation</h5>
                  <div className={styles.headerRight}>
                    <Prettifyer />
                    <RunBtn />
                  </div>
                </div>
                <CodeEditorPanel isLoading={isFetching} schema={data} />
              </div>
              <div className={styles.panel}>
                <Tabs className={styles.tabsWrapper}>
                  <TabList className={styles.tabsNav}>
                    <Tab
                      className={styles.tabBtn}
                      selectedClassName={styles.tabBtnActive}
                    >
                      Results
                    </Tab>
                    <Tab
                      className={styles.tabBtn}
                      selectedClassName={styles.tabBtnActive}
                    >
                      Vars
                    </Tab>
                    <Tab
                      className={styles.tabBtn}
                      selectedClassName={styles.tabBtnActive}
                    >
                      Headers
                    </Tab>
                  </TabList>
                  <TabPanel selectedClassName={styles.tab}>
                    <ResultPanel />
                  </TabPanel>
                  <TabPanel selectedClassName={styles.tab}>
                    <VariablesPanel />
                  </TabPanel>
                  <TabPanel selectedClassName={styles.tab}>
                    <HeadersPanel />
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default MobileLayout;
