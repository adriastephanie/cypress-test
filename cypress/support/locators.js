const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn',
        MESSAGE: '.toast-message',

    },

    MENU: {
        HOME: '[data-test=menu-home]',
        SETTING: '[data-test=menu-settings]',
        CONTA: '[href="/contas"]',
        RESET: '[href="/reset"]',

    },
    
    CONTA: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        XP_ALTERAR_CONTA: "//table//td[contains(., 'Conta de teste 1')]/..//i[@class='far fa-edit']",


    },

    MOVIMENTACAO: {
        MENU_MOVIMENTACAO: '[data-test=menu-movimentacao]',
        DESCRICAO: '#descricao',
        VALOR: '[data-test=valor]',
        CONTA: '[data-test=conta]',
        STATUS: '[data-test=status]',
        INTERESSADO: '#envolvido',
        BTN_SALVAR: '.btn-primary'

    },

    SALDO: {
        FN_XP_SALDO_CONTA: nome => `//td[contains(., '${nome}')]/../td[2]`,

    }

}

export default locators;
