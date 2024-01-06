import React, { FC, lazy, Suspense, useEffect, useState } from 'react';
import CodeEditorPanel from '@/components/GraphQl/CodeEditorPanel/CodeEditorPanel.tsx';
import ResultPanel from '@/components/GraphQl/ResultPanel/ResultPanel.tsx';
import styles from './DesktopLayout.module.scss';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import VariablesPanel from '@/components/GraphQl/VariablesPanel/VariablesPanel.tsx';
import HeadersPanel from '@/components/GraphQl/HeadersPanel/HeadersPanel.tsx';
import { TabList, TabPanel, Tabs, Tab } from 'react-tabs';
import InputUrlApi from '@/components/GraphQl/InputUrlApi/InputUrlApi.tsx';
import RunBtn from '@/components/GraphQl/RunBtn/RunBtn.tsx';
import Prettifyer from '@/components/GraphQl/Prettifyer/Prettifyer.tsx';

import { useAppSelector } from '@/store/hooks.ts';
import { graphqlAPI } from '@/store/GraphQl/graphqlAPI/graphqlAPI.ts';
import Loader from '@/components/common/Loading/Loader/Loader.tsx';
import { goToast } from '@/components/toast-helper.ts';

const DesktopLayout: FC = () => {
  const [isDocPanelOpen, setIsDocPanelOpen] = useState(false);
  const toggleDoc = () => {
    setIsDocPanelOpen((prevState) => !prevState);
  };

  const apiUrl = useAppSelector((state) => state.graphqlSlice.apiUrl);

  const [getSchema, { data, isFetching, isError }] =
    graphqlAPI.useLazyGetSchemaQuery();

  useEffect(() => {
    getSchema(apiUrl);
  }, [apiUrl, getSchema]);

  useEffect(() => {
    isError && goToast('Something went wrong!', 'error');
  }, [isError]);

  const DocPanel = lazy(
    () => import('@/components/GraphQl/DocPanel/DocPanel.tsx'),
  );

  return (
    <>
      <div>Header</div>
      <div className={styles.ide}>
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
            <PanelGroup direction="horizontal">
              <button
                type="button"
                onClick={toggleDoc}
                className={styles.docToggler}
                title="Docs"
              >
                <img src="src/assets/doc-btn.svg" alt="docs" />
              </button>
              {isDocPanelOpen && (
                <>
                  <Panel
                    minSize={10}
                    maxSize={9999}
                    defaultSize={30}
                    className={styles.docPanel}
                  >
                    <Suspense fallback={<Loader />}>
                      <DocPanel schema={data} />
                    </Suspense>
                  </Panel>
                  <PanelResizeHandle className={styles.separator} />
                </>
              )}
              <Panel minSize={30} maxSize={9999} className={styles.panel}>
                <PanelGroup direction="vertical">
                  <Panel className={styles.panel}>
                    <div className={styles.header}>
                      <h5 className={styles.panelTitle}>Operation</h5>
                      <div className={styles.headerRight}>
                        <Prettifyer />
                        <RunBtn />
                      </div>
                    </div>
                    <CodeEditorPanel isLoading={isFetching} schema={data} />
                  </Panel>
                  <PanelResizeHandle className={styles.horizontalSeparator} />
                  <Panel className={styles.panel}>
                    <Tabs className={styles.tabsWrapper}>
                      <TabList className={styles.tabsNav}>
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
                        <VariablesPanel />
                      </TabPanel>
                      <TabPanel selectedClassName={styles.tab}>
                        <HeadersPanel />
                      </TabPanel>
                    </Tabs>
                  </Panel>
                </PanelGroup>
              </Panel>
              <PanelResizeHandle className={styles.separator} />
              <Panel minSize={30} maxSize={9999} className={styles.panel}>
                <div className={styles.header}>
                  <h5 className={styles.panelTitle}>Results</h5>
                </div>
                <ResultPanel />
              </Panel>
            </PanelGroup>
          )
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default DesktopLayout;
