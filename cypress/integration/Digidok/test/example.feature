Feature: Test

    Background:
        * Gebruiker navigeert naar de "" pagina
        * Gebruiker "sandraTD" logt in bij Digidok
        * Gebruiker pauzeert de test
        ## Vul ontvangen sms code in, druk op bevestigen, dubbelklik de cliënt, hervat de test

    Scenario: Temp
        * Gebruiker "sandraTD" start het behandeltraject
        * Gebruiker controleert de "Gaat het om dagzorg of anw?" vraag titel
        * Gebruiker kiest de "Dagzorg" antwoorden bij de "Gaat het om dagzorg of anw?" vraag
        * Gebruiker klikt op de Volgende knop
