

export const DATA_SECURITY_PAGE = '#data-security';
export const SECURITY_MEASURES_SELECTOR = '#securityMeasures';
export const ENCRYTION_SELECTOR = '#encryption';
export const DATA_RESIDENCY_COMPLIANCE_SELECTOR ='#dataResidencyCompliance';
export const DATA_SECURITY_WARNING_SELECTOR='#data-security-warning';


export function verifyTitleOnDataSecurityPage()
{
  cy.get(DATA_SECURITY_PAGE).contains('Data Security');
}

export function fillDataSecurityDetails(data) {
    cy.get(SECURITY_MEASURES_SELECTOR).invoke('val',data.securityMeasures || '');
    cy.get(ENCRYTION_SELECTOR).select(data.encryption);
    if (data.region === 'EU') {
      cy.get(DATA_RESIDENCY_COMPLIANCE_SELECTOR).select(data.dataResidencyCompliance);
    }
  }

export function validateDataSecurityWarnings(data) {
    if (data.region === 'EU' && data.dataResidencyCompliance !== 'Yes') {
      cy.get(DATA_SECURITY_WARNING_SELECTOR).should('contain', 'Data Residency Compliance is required for EU region.');
    }
    if (!data.securityMeasures) {
      cy.get(DATA_SECURITY_WARNING_SELECTOR).should('contain', 'Security Measures cannot be empty.');
    }
   if (data.sensitiveData==='Yes' && data.encryption !== 'Yes') {
      cy.get(DATA_SECURITY_WARNING_SELECTOR).should('contain', 'Encryption is recommended for sensitive data.');
    }
}

 
 export function navigateToCompliancePage() {
  cy.get(DATA_SECURITY_PAGE)
    .find('button')
    .contains('Next').click();
 }   


Cypress.Commands.add('verifyTitleOnDataSecurityPage',verifyTitleOnDataSecurityPage);
Cypress.Commands.add('fillDataSecurityDetails',fillDataSecurityDetails);
Cypress.Commands.add('validateDataSecurityWarnings',validateDataSecurityWarnings);
Cypress.Commands.add('navigateToCompliancePage',navigateToCompliancePage);


  