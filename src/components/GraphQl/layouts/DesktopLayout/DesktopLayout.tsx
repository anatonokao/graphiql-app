import React, { FC } from 'react';
import CodeEditorSection from '../../CodeEditorSection/CodeEditorSection.tsx';
import ResultSection from '../../ResultSection/ResultSection.tsx';
import styles from './DesktopLayout.module.scss';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

const DesktopLayout: FC = () => {
  return (
    <>
      <div>Header</div>
      <div className={styles.ide}>
        <PanelGroup direction="horizontal">
          <Panel minSize={30} maxSize={9999} className={styles.panel}>
            <PanelGroup direction="vertical">
              <Panel>
                <CodeEditorSection />
              </Panel>
              <PanelResizeHandle className={styles.horizontalSeparator} />
              <Panel>
                <CodeEditorSection />
              </Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className={styles.separator} />
          <Panel minSize={30} maxSize={9999} className={styles.panel}>
            <ResultSection />
          </Panel>
        </PanelGroup>
      </div>
    </>
  );
};

export default DesktopLayout;
