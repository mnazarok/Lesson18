const link = "https://guest:welcome2qauto@qauto.forstudy.space"

describe("Header buttons", () => {
    beforeEach(() => {
        cy.visit(link);

    });

    it("Home button", () =>{
        cy.contains("a", "Home").should("contain", "Home").and("have.class", "header-link");
    });

    it("About button", () =>{
        cy.contains("button", "About").should("contain", "About").and("have.class", "header-link");
    });

    it("Contacts button", () =>{
        cy.contains("button", "Contacts").should("contain", "Contacts").and("have.class", "header-link");
    });

    it("Guest log in button", () =>{
        cy.contains("button", "Guest log in").should("contain", "Guest log in").and("have.class", "header-link");
    });

    it("Sign In button", () =>{
        cy.contains("button", "Sign In").should("contain", "Sign In").and("have.class", "header_signin");
    });

    it("Sign up button", () => {
        cy.contains("button", "Sign up").should("contain", "Sign up").and("have.class", "hero-descriptor_btn");
    });

    it("Facebook icon", () => {
        cy.get("span.icon-facebook").should("have.class", "icon-facebook").and("have.class", "socials_icon").click();
    });

    it("Telegram icon", () => {
        cy.get("span.icon-telegram").should("have.class", "icon-telegram").and("have.class", "socials_icon").click();
    });

    it("Youtube icon", () => {
        cy.get("span.icon-youtube").should("have.class", "icon-youtube").and("have.class", "socials_icon").click();
    });

    it("Instagram icon", () => {
        cy.get("span.icon-instagram").should("have.class", "icon-instagram").and("have.class", "socials_icon").click();
    });

    it("Linkedin icon", () => {
        cy.get("span.icon-linkedin").should("have.class", "icon-linkedin").and("have.class", "socials_icon").click();
    });

    it("ithellel.ua icon", () => {
        cy.get('a[href="https://ithillel.ua"]').click();
    });

    it("Support email", () => {
        cy.get('a[href="https://ithillel.ua"]').click();
    });
});


