
export const GENERAL_INFO_PAGE = '#general-info'
export const DEPLOYMENT_NAME_SELECTOR = '#deploymentName';
export const ORGANIZATION_NAME_SELECTOR = '#organizationName';
export const EMAIL_ADDRESS_SELECTOR = '#emailAddress';
export const DEPLOYMENT_REGION_SELECTOR = '#deploymentRegion';
export const GENERAL_INFO_WARNING = '#general-info-warning';



export function fillGeneralInfo(data)
{      
      cy.get(GENERAL_INFO_PAGE).then(($item) => {
      cy.wrap($item).should('contain','AI Deployment Name: ')
                    .and('contain','Organization Name: ')
                    .and('contain','Email Address: ')
                    .and('contain','Deployment Region:');   
      });
       cy.get(DEPLOYMENT_NAME_SELECTOR).type(data.name || '');
       cy.get(ORGANIZATION_NAME_SELECTOR).type(data.organization|| '');
       cy.get(EMAIL_ADDRESS_SELECTOR).type(data.email|| '');
       cy.get(DEPLOYMENT_REGION_SELECTOR).select(data.region|| '');  
}

export function fillGeneralInfoWithMissingData(data)
{      
       cy.get(DEPLOYMENT_NAME_SELECTOR).invoke('val',data.name || '');
       cy.get(ORGANIZATION_NAME_SELECTOR).invoke('val',data.organization|| '');
       cy.get(EMAIL_ADDRESS_SELECTOR).invoke('val',data.email|| '');
       cy.get(DEPLOYMENT_REGION_SELECTOR).select(data.region|| '');  
}

export function validateGeneralInfoWarnings()
 {
      cy.navigateToAIRiskManagementPage()
        .get(GENERAL_INFO_PAGE)
        .find(GENERAL_INFO_WARNING)
        .should('exist')
        .and('contain', 'Please fill out all fields and provide a valid email.');
  }

export function navigateToAIRiskManagementPage()
  {
    cy.get(GENERAL_INFO_PAGE).contains('Next').click(); 
    return cy;
  }


Cypress.Commands.add('fillGeneralInfo',fillGeneralInfo);
Cypress.Commands.add('validateGeneralInfoWarnings',validateGeneralInfoWarnings);
Cypress.Commands.add('navigateToAIRiskManagementPage',navigateToAIRiskManagementPage);
Cypress.Commands.add('fillGeneralInfoWithMissingData',fillGeneralInfoWithMissingData);