import React, { FC } from 'react';
import CodeEditorPanel from '@/components/GraphQl/CodeEditorPanel/CodeEditorPanel.tsx';
import ResultPanel from '@/components/GraphQl/ResultPanel/ResultPanel.tsx';
import styles from './DesktopLayout.module.scss';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import VariablesPanel from '@/components/GraphQl/VariablesPanel/VariablesPanel.tsx';
import HeadersPanel from '@/components/GraphQl/HeadersPanel/HeadersPanel.tsx';
// import Tab from '@/components/GraphQl/TabsWrapper/Tab/Tab.tsx';
import { TabList, TabPanel, Tabs, Tab } from 'react-tabs';
import InputUrlApi from '@/components/GraphQl/InputUrlApi/InputUrlApi.tsx';
import RunBtn from '@/components/GraphQl/RunBtn/RunBtn.tsx';

const DesktopLayout: FC = () => {
  return (
    <>
      <div>Header</div>
      <div className={styles.ide}>
        <InputUrlApi />
        <PanelGroup direction="horizontal">
          <Panel minSize={30} maxSize={9999} className={styles.panel}>
            <PanelGroup direction="vertical">
              <Panel className={styles.panel}>
                <div className={styles.header}>
                  <h5 className={styles.panelTitle}>Operation</h5>
                  <RunBtn />
                </div>
                <CodeEditorPanel />
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
            <h5 className={styles.panelTitle}>Results</h5>
            <ResultPanel />
          </Panel>
        </PanelGroup>
      </div>
    </>
  );
};

export default DesktopLayout;
