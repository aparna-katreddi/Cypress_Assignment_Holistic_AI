
export const AI_RISK_SECTION_SELECTOR = '#ai-risk.section.active'
export const SENSITIVE_DATA_SELECTOR = '#sensitiveData';
export const RISK_LEVEL_SELECTOR = '#riskLevel';
export const AI_RISK_WARNING_SELECTOR = '#ai-risk-warning';


export function verifyTitleOnAIRiskMngmtPage()
{
  cy.get(AI_RISK_SECTION_SELECTOR).contains('AI Risk Management');
}

export function selectSensitiveData(sensitiveData) {
    cy.get(AI_RISK_SECTION_SELECTOR).find('label').contains(`Does your AI system handle sensitive data? `);
    cy.get(AI_RISK_SECTION_SELECTOR).find(SENSITIVE_DATA_SELECTOR).select(sensitiveData);
  }

export function selectRiskLevel(riskLevel) {
  cy.get(AI_RISK_SECTION_SELECTOR).find('label').contains('Risk Level:');
    cy.get(AI_RISK_SECTION_SELECTOR).find(RISK_LEVEL_SELECTOR).select(riskLevel);
  }

  export function validateNavigationWarning() {
     cy.get(AI_RISK_WARNING_SELECTOR)
       .should('contain', 'Please select both Sensitive Data and Risk Level.');
  }


  export function navigateToNextSection() {
    cy.get(AI_RISK_SECTION_SELECTOR).find('button').contains('Next').click();
  }


  Cypress.Commands.add('verifyTitleOnAIRiskMngmtPage',verifyTitleOnAIRiskMngmtPage);
  Cypress.Commands.add('selectSensitiveData',selectSensitiveData);
  Cypress.Commands.add('selectRiskLevel',selectRiskLevel);
  Cypress.Commands.add('navigateToNextSection',navigateToNextSection);
  Cypress.Commands.add('validateNavigationWarning',validateNavigationWarning);