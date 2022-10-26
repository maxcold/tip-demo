/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import { threatIntelligenceLayoutStyles } from './threat_intelligence.styles';
import {
  EuiPageTemplate,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiText, EuiButton
} from '@elastic/eui';
import CollapsibleNav from './threat_intelligence_collapsible_nav';
import { IndicatorsImport } from '../components/indicators_import/indicators_import';

const ThreatIntelligenceLayout: React.FC = ({ children }) => {
  const styles = threatIntelligenceLayoutStyles();
  return (
    <div css={styles.mainWrapper}>
      <CollapsibleNav />

      <div css={styles.contentWrapper}>
        <EuiPageTemplate
          restrictWidth={false}
          panelled={true}
          bottomBorder={true}>
          <EuiPageTemplate.Sidebar sticky={true} />
          <EuiPageTemplate.Section>
            <EuiPageHeader alignItems="center" bottomBorder={true}>
              <EuiPageHeaderSection>
                <EuiText>
                  <h2>Indicators</h2>
                </EuiText>
              </EuiPageHeaderSection>
              <EuiPageHeaderSection>
                <IndicatorsImport />
              </EuiPageHeaderSection>
            </EuiPageHeader>

            <div style={{ position: 'relative' }}>{children}</div>
          </EuiPageTemplate.Section>
        </EuiPageTemplate>
      </div>
    </div>
  );
};

export default ThreatIntelligenceLayout;
