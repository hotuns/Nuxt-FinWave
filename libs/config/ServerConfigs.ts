export class ServerConfigs {
    readonly users: any | undefined;
    readonly accounts: any | undefined;
    readonly currencies: any | undefined;
    readonly notes: any | undefined;
    readonly transactions: any | undefined;
    readonly ai: any | undefined;
    readonly analytics: any | undefined;
    readonly reports: any | undefined;
    readonly notifications: any | undefined;
    readonly accumulation: any | undefined;
    readonly exchanges: any | undefined;

    constructor() {
        // 用户配置
        this.users = {
            demoMode: false,
            registration: {
                enabled: true
            },
            maxSessionDescriptionLength: 100,
            userSessionsLifetimeDays: 30
        };
        
        // 账户配置
        this.accounts = {
            folders: {
                enabled: true,
                maxNameLength: 50,
                maxDescriptionLength: 200
            },
            maxNameLength: 50,
            maxDescriptionLength: 200
        };
        
        // 货币配置
        this.currencies = {
            enabled: true,
            maxCodeLength: 10,
            maxDecimals: 18,
            maxDescriptionLength: 200
        };
        
        // 笔记配置
        this.notes = {
            enabled: true,
            maxNoteLength: 1000
        };
        
        // 交易配置
        this.transactions = {
            categories: {
                enabled: true,
                maxNameLength: 50,
                maxDescriptionLength: 200
            },
            maxDescriptionLength: 200
        };
        
        // AI 配置
        this.ai = {
            enabled: true
        };
        
        // 分析配置
        this.analytics = {
            maxTimeRangeDaysForMonths: 365
        };
        
        // 报告配置
        this.reports = {
            maxDescriptionLength: 200
        };
        
        // 通知配置
        this.notifications = {
            maxDescriptionLength: 200
        };
        
        // 累积配置
        this.accumulation = {
            maxStepsPerAccount: 10
        };
        
        // 交易所配置
        this.exchanges = {
            enabled: true
        };
    }
}