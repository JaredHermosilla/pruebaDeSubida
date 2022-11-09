/// <reference types="cypress" />

describe('desafioDos', () => {
  let datosLogin
  before('Inicio de precondiciones', () => {

      cy.fixture('desafioDoss').then(datos =>{
          datosLogin = datos
          
      })
      
  })

  beforeEach('Incio de sesion', () => {
      
      cy.visit('')
      cy.get('#registertoggle').dblclick();

  })

  it('Ingreso de tareas', () => {
      
      cy.get('#user').type(datosLogin.usuario);
      cy.get('#pass').type(datosLogin.password);
      cy.get('#submitForm').click();
      cy.get('#todolistlink').click();
      cy.get('#task').type("tarea 1");
      cy.get('#sendTask').click();
      cy.contains('tarea 1').click();
      cy.get('#task').type("tarea 2");
      cy.get('#sendTask').click();
      cy.contains('tarea 2').click();
      cy.get('#task').type("tarea 3");
      cy.get('#sendTask').click();
      cy.contains('tarea 3').click();
      cy.get('#task').type("tarea 4");
      cy.get('#sendTask').click();
      cy.contains('tarea 4').click();
      cy.get('#task').type("tarea 5");
      cy.get('#sendTask').click();
      cy.contains('tarea 5').click();


      
  

  })

  it('Verificar botones', () => {

      cy.get('#user').type(datosLogin.usuario);
      cy.get('#pass').type(datosLogin.password);
      cy.get('#submitForm').click();
      cy.get('#todolistlink').click();
      cy.xpath('//button[contains(@id,"all")]').should('exist');
      cy.xpath('//button[contains(@id,"completed")]').should('exist');
      cy.xpath('//button[contains(@id,"active")]').should('exist');
      cy.xpath('//button[contains(@id,"removeAll")]').should('exist');
  })

  it('Agregar 2 tareas, eliminar segunda', () => {

      cy.get('#user').type(datosLogin.usuario);
      cy.get('#pass').type(datosLogin.password);
      cy.get('#submitForm').click();
      cy.get('#todolistlink').click();
      cy.get('#task').type("esta tarea no se elimina");
      cy.get('#sendTask').click();
      cy.contains('esta tarea no se elimina').click();
      cy.get('#task').type("esta tarea si se elimina");
      cy.get('#sendTask').click();
      cy.contains('esta tarea si se elimina').click();
      cy.xpath('/html/body/div/div/div/ul/li[2]/div/button[@type="button"]').click();


  })

  it('Agregar 2 tareas, eliminar primera', () => {

      cy.get('#user').type(datosLogin.usuario);
      cy.get('#pass').type(datosLogin.password);
      cy.get('#submitForm').click();
      cy.get('#todolistlink').click();
      cy.get('#task').type("esta tarea si se elimina");
      cy.get('#sendTask').click();
      cy.contains('esta tarea si se elimina').click();
      cy.get('#task').type("esta tarea no se elimina");
      cy.get('#sendTask').click();
      cy.contains('esta tarea no se elimina').click();
      cy.xpath('/html/body/div/div/div/ul/li[1]/div/button[@type="button"]').click({force: false});

      
  
  })

})