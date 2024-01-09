import React, { FC, lazy, Suspense, useRef, useState } from 'react';
import CodeEditorPanel from '@/components/GraphQl/CodeEditorPanel/CodeEditorPanel.tsx';
import ResultPanel from '@/components/GraphQl/ResultPanel/ResultPanel.tsx';
import styles from './DesktopLayout.module.scss';
import {
  ImperativePanelHandle,
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from 'react-resizable-panels';
import VariablesPanel from '@/components/GraphQl/VariablesPanel/VariablesPanel.tsx';
import HeadersPanel from '@/components/GraphQl/HeadersPanel/HeadersPanel.tsx';
import { TabList, TabPanel, Tabs, Tab } from 'react-tabs';
import InputUrlApi from '@/components/GraphQl/InputUrlApi/InputUrlApi.tsx';
import RunBtn from '@/components/GraphQl/RunBtn/RunBtn.tsx';
import Prettifyer from '@/components/GraphQl/Prettifyer/Prettifyer.tsx';
import Loader from '@/components/common/Loading/Loader/Loader.tsx';
import { IntrospectionQuery } from 'graphql/utilities';
import { useLocalization } from '@/components/localization/LocalizationContext';

type DesktopLayoutProps = {
  data: IntrospectionQuery | undefined;
  isFetching: boolean;
  isError: boolean;
};

const DesktopLayout: FC<DesktopLayoutProps> = ({
  data,
  isFetching,
  isError,
}) => {
  const [isDocPanelOpen, setIsDocPanelOpen] = useState(false);
  const { texts } = useLocalization();
  const DocPanel = lazy(
    () => import('@/components/GraphQl/DocPanel/DocPanel.tsx'),
  );
  const [isAdditionalEditorsOpen, setIsAdditionalEditorsOpen] = useState(true);
  const panels = useRef<ImperativePanelHandle>(null);

  const toggleDoc = () => {
    setIsDocPanelOpen((prevState) => !prevState);
  };

  const toggleAdditionalEditors = () => {
    setIsAdditionalEditorsOpen((prevState) => !prevState);
    if (isAdditionalEditorsOpen) {
      panels.current?.collapse();
    } else {
      panels.current?.expand();
    }
  };

  return (
    <>
      <div className={styles.ide} data-testid="DesktopLayout">
        <InputUrlApi />
        {!isFetching ? (
          isError ? (
            <div className={styles.error}>
              <div className={styles.errorTitle}>
                {texts.graphQLPage.errorTitleAPI}
              </div>
              <div className={styles.errorText}>
              {texts.graphQLPage.errorAPI}
              </div>
            </div>
          ) : (
            <PanelGroup direction="horizontal">
              <button
                type="button"
                onClick={toggleDoc}
                className={styles.docToggler}
                title="Docs"
                data-testid="DesktopLayout-DocToggler"
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
                    id="graphiql-docPanel"
                    order={1}
                  >
                    <Suspense fallback={<Loader />}>
                      <DocPanel schema={data} />
                    </Suspense>
                  </Panel>
                  <PanelResizeHandle className={styles.separator} />
                </>
              )}
              <Panel
                minSize={30}
                className={styles.panel}
                id="graphiql-EditorsPanel"
                order={2}
              >
                <PanelGroup direction="vertical">
                  <Panel
                    className={styles.panel}
                    order={1}
                    id="graphiql-CodeEditorPanel"
                  >
                    <div className={styles.header}>
                      <h5 className={styles.panelTitle}>{texts.graphQLPage.operationTitle}</h5>
                      <div className={styles.headerRight}>
                        <Prettifyer />
                        <RunBtn />
                      </div>
                    </div>
                    <CodeEditorPanel isLoading={isFetching} schema={data} />
                  </Panel>
                  <PanelResizeHandle
                    className={styles.horizontalSeparator}
                    hidden={!isAdditionalEditorsOpen}
                  />
                  <button
                    type="button"
                    onClick={toggleAdditionalEditors}
                    className={styles.tabsToggler}
                    data-testid="DesktopLayout-AdditionalEditorsToggler"
                  >
                    {isAdditionalEditorsOpen ? '˅' : '˄'}
                  </button>
                  <Panel
                    className={styles.panel}
                    order={2}
                    id="graphiql-VarsHeadersEditorsPanel"
                    collapsible={true}
                    ref={panels}
                  >
                    <Tabs className={styles.tabsWrapper}>
                      <TabList className={styles.tabsNav}>
                        <Tab
                          className={styles.tabBtn}
                          selectedClassName={styles.tabBtnActive}
                        >
                          {texts.graphQLPage.vars}
                        </Tab>
                        <Tab
                          className={styles.tabBtn}
                          selectedClassName={styles.tabBtnActive}
                        >
                          {texts.graphQLPage.headers}
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
              <Panel
                minSize={30}
                className={styles.panel}
                id="graphiql-ResultPanel"
                order={2}
              >
                <div className={styles.header}>
                  <h5 className={styles.panelTitle}>{texts.graphQLPage.results}</h5>
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
