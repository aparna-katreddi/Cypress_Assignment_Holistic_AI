
export const COMPLIANCE_PAGE = '#compliance';
export const RISK_ASSESMENT_SELECTOR ='#riskAssessment';
export const AUDIT_SELECTOR ='#audit';
export const COMPLIANCE_WARNING_SELECTOR = '#compliance-warning';



export function verifyTitleOnCompliancePage(){
  cy.get(COMPLIANCE_PAGE).contains('Compliance Measures');
}


export function completeComplianceMeasures(data) {
    cy.get(RISK_ASSESMENT_SELECTOR).select(data.riskAssessment || '');
    cy.get(AUDIT_SELECTOR).select(data.audit || '');
  }

  export function validateComplianceWarnings(data) {
    if (data.riskLevel === 'High' && (data.riskAssessment !== 'Yes' || data.audit !== 'Yes')) {
      cy.get(COMPLIANCE_WARNING_SELECTOR).should('contain', 'High-risk level requires formal risk assessment and audit.');
    }
  }

  export function navigateToSummaryPage()
  {
    cy.get(COMPLIANCE_PAGE)
      .find('button')
      .contains('Submit').click();
      return cy;
  }


Cypress.Commands.add('verifyTitleOnCompliancePage',verifyTitleOnCompliancePage);  
Cypress.Commands.add('completeComplianceMeasures',completeComplianceMeasures);
Cypress.Commands.add('validateComplianceWarnings',validateComplianceWarnings);
Cypress.Commands.add('navigateToSummaryPage',navigateToSummaryPage);