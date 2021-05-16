const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn',
        MESSAGE: '.toast-message',

    },

    MENU: {
        HOME: '[data-test=menu-home]',
        EXTRATO: '[data-test=menu-extrato]',
        SETTING: '[data-test=menu-settings]',
        CONTA: '[href="/contas"]',
        RESET: '[href="/reset"]',

    },
    
    CONTA: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        XP_ALTERAR_CONTA: "//table//td[contains(., 'Conta de teste 1')]/..//i[@class='far fa-edit']",
        //span[contains(., 'Movimentacao para extrato')]/../../..//i[@class='far fa-trash-alt']


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

    },

    EXTRATO: {
        FN_XP_REMOVE_ELEMENT: conta => `//span[contains(., '${conta}')]/../../..//i[@class='far fa-trash-alt']`,
    }

}

export default locators;
