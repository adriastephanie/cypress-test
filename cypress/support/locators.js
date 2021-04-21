const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn',
        MESSAGE: '.toast-message',

    },

    MENU: {
        SETTING: '[data-test=menu-settings]',
        CONTA: '[href="/contas"]',
        RESET: '[href="/reset"]',

    },
    
    CONTA: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        XP_ALTERAR_CONTA: "//table//td[contains(., 'Conta de teste 1')]/..//i[@class='far fa-edit']",
        



    }

}

export default locators;
