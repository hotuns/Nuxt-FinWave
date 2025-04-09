import {useCookie} from "#app";
import {AbstractApi} from "~/libs/api/AbstractApi";
import {UserApi} from "~/libs/api/user/UserApi";
import {SessionsApi} from "~/libs/api/sessions/SessionsApi";
import {AccountsApi} from "~/libs/api/accounts/AccountsApi";
import {AccountsFoldersApi} from "~/libs/api/accounts/folders/AccountsFoldersApi";
import {TransactionsCategoriesApi} from "~/libs/api/category/TransactionsCategoriesApi";
import {TransactionsApi} from "~/libs/api/transactions/TransactionsApi";
import {RecurringTransactionsApi} from "~/libs/api/recurring/RecurringTransactionsApi";
import {CurrenciesApi} from "~/libs/api/currencies/CurrenciesApi";
import {AnalyticsApi} from "~/libs/api/analytics/AnalyticsApi";
import {NotesApi} from "~/libs/api/notes/NotesApi";
import {NotificationApi} from "~/libs/api/notification/NotificationApi";
import {AdminApi} from "~/libs/api/admin/AdminApi";
import {ConfigManager} from "~/libs/config/ConfigManager";
import {ServerConfigs} from "~/libs/config/ServerConfigs";
import {AccumulationsApi} from "~/libs/api/accumulations/AccumulationsApi";
import {ReportsApi} from "~/libs/api/reports/ReportsApi";
import {ca} from "date-fns/locale";
import {useStorage} from "@vueuse/core";
import {useServer} from "~/composables/useServer";
import {CategoriesBudgetApi} from "~/libs/api/category/budget/CategoriesBudgetApi";
import {AiApi} from "~/libs/api/ai/AiApi";
import {FilesApi} from "~/libs/api/files/FilesApi";
import {ServerApi} from "~/libs/api/server/ServerApi";
import {ExchangeRateApi} from "~/libs/api/currencies/ExchangeRateApi";

export const useApiLoader = new class ApiLoader {
    private readonly serverConfigs: ConfigManager;
    private readonly serverApi: ServerApi;

    private readonly userApi: UserApi;
    private readonly sessionsApi : SessionsApi;

    private readonly accountsApi : AccountsApi;
    private readonly accountsFoldersApi : AccountsFoldersApi;

    private readonly transactionsCategoriesApi : TransactionsCategoriesApi;
    private readonly transactionsApi : TransactionsApi;
    private readonly recurringTransactionsApi : RecurringTransactionsApi;

    private readonly currenciesApi : CurrenciesApi;
    private readonly exchangeRateApi : ExchangeRateApi;

    private readonly analyticsApi : AnalyticsApi;
    private readonly notesApi : NotesApi;
    private readonly notificationsApi : NotificationApi;

    private readonly adminApi : AdminApi;
    private readonly accumulationsApi: AccumulationsApi;

    private readonly categoriesBudgetApi : CategoriesBudgetApi;

    private readonly reportsApi: ReportsApi;
    private readonly filesApi : FilesApi;

    private readonly aiApi: AiApi;

    private websocketClient : WebSocket | null = null;

    constructor() {
        this.serverConfigs = new ConfigManager();
        this.serverApi = new ServerApi();

        this.userApi = new UserApi();
        this.sessionsApi = new SessionsApi();

        this.accountsApi = new AccountsApi();
        this.accountsFoldersApi = new AccountsFoldersApi();

        this.transactionsCategoriesApi = new TransactionsCategoriesApi();
        this.transactionsApi = new TransactionsApi();
        this.recurringTransactionsApi = new RecurringTransactionsApi(this.accountsApi);

        this.currenciesApi = new CurrenciesApi();
        this.exchangeRateApi = new ExchangeRateApi();

        this.analyticsApi = new AnalyticsApi();
        this.notesApi = new NotesApi();
        this.notificationsApi = new NotificationApi();
        this.accumulationsApi = new AccumulationsApi();

        this.categoriesBudgetApi = new CategoriesBudgetApi();

        this.reportsApi = new ReportsApi();
        this.filesApi = new FilesApi();

        this.adminApi = new AdminApi();

        this.aiApi = new AiApi();
    }

    public async fetch() : Promise<boolean> {
        // 初始化配置
        await this.serverConfigs.init();
        // 设置模拟配置
        this.serverConfigs.setMockConfigs(new ServerConfigs());
        
        // 直接返回 true，模拟认证成功
        return true;
    }

    public connectWebsocket() : void {
        // 不需要实际的 WebSocket 连接
        console.info("WebSocket connection disabled in demo mode");
    }

    protected parseMessage(message : any) {
        // 不需要处理实际的消息
        console.info("Message parsing disabled in demo mode");
    }

    public getProvider() : any {
        return {
            provide: {
                serverConfigs: this.serverConfigs,
                serverApi: this.serverApi,
                accountsApi: this.accountsApi,
                accountsFoldersApi: this.accountsFoldersApi,
                transactionsCategoriesApi: this.transactionsCategoriesApi,
                transactionsApi: this.transactionsApi,
                recurringTransactionsApi: this.recurringTransactionsApi,
                currenciesApi: this.currenciesApi,
                exchangeRateApi: this.exchangeRateApi,
                analyticsApi: this.analyticsApi,
                notesApi: this.notesApi,
                userApi: this.userApi,
                sessionsApi: this.sessionsApi,
                notificationsApi: this.notificationsApi,
                accumulationsApi: this.accumulationsApi,
                categoriesBudgetApi: this.categoriesBudgetApi,
                reportsApi: this.reportsApi,
                filesApi: this.filesApi,
                adminApi: this.adminApi,
                aiApi: this.aiApi
            }
        }
    }

    public async initDemo()  {
        const { t} = useI18n();
        const mainCurrencyCode = t("demo.mainCurrencyCode");

        const results = await Promise.all([
            this.accountsFoldersApi.newFolder(t("demo.accountFolders.1.name"), t("demo.accountFolders.1.description")),
            this.accountsFoldersApi.newFolder(t("demo.accountFolders.2.name"), t("demo.accountFolders.2.description")),

            this.currenciesApi.newCurrency("BTC", "₿", 8, "Bitcoin"),
            this.currenciesApi.newCurrency("ETH", "Ξ", 18, "Ethereum"),

            this.transactionsCategoriesApi.newCategory(1, -1, t("demo.categories.1"), null),
            this.transactionsCategoriesApi.newCategory(0, -1, t("demo.categories.2"), null),
            this.transactionsCategoriesApi.newCategory(-1, -1, t("demo.categories.3"), null),
            this.transactionsCategoriesApi.newCategory(-1, -1, t("demo.categories.4"), null),
            this.transactionsCategoriesApi.newCategory(-1, -1, t("demo.categories.5"), null),
            this.transactionsCategoriesApi.newCategory(-1, -1, t("demo.categories.6"), null),
            this.transactionsCategoriesApi.newCategory(-1, -1, t("demo.categories.7"), null),
            this.transactionsCategoriesApi.newCategory(-1, -1, t("demo.categories.8"), null),
        ]).catch(t => {
            console.log(t);

            return []
        });

        const tradFolder = results[0]
        const cryptoFolder = results[1]

        const btcCurrency = results[2]
        const ethCurrency = results[3]

        const salaryCategory = results[4]
        const investmentCategory = results[5]
        const goodsCategory = results[6]
        const housingCategory = results[7]
        const entertainmentCategory = results[8]
        const apparelCategory = results[9]
        const healthcareCategory = results[10]
        const travelCategory = results[11]

        let mainCurrency = this.currenciesApi.getCurrencies().value.find((v) => v.code === mainCurrencyCode)

        if (!mainCurrency) {
            mainCurrency = 1;
        }else {
            mainCurrency = mainCurrency.currencyId;
        }

        useStorage("preferred_currency", 1).value = mainCurrency;

        const accounts = await Promise.all([
            this.accountsApi.newAccount(t("demo.accounts.3.name"), btcCurrency, cryptoFolder, t("demo.accounts.3.description")),
            this.accountsApi.newAccount(t("demo.accounts.4.name"), ethCurrency, cryptoFolder, t("demo.accounts.4.description")),
            this.accountsApi.newAccount(t("demo.accounts.1"), mainCurrency, tradFolder, null),
            this.accountsApi.newAccount(t("demo.accounts.2"), mainCurrency, tradFolder, null),
        ])

        const ledger = accounts[0];
        const binance = accounts[1];
        const paypal = accounts[2];
        const cash = accounts[3];

        const today = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;

        return Promise.all([
            this.transactionsApi.newTransaction(salaryCategory, paypal, new Date(today - oneDay * 14), 50000, null),
            this.transactionsApi.newTransaction(housingCategory, paypal, new Date(today - oneDay * 14), -5000, null),

            this.transactionsApi.newTransaction(goodsCategory, paypal, new Date(today - oneDay * 13), -421, null),
            this.transactionsApi.newInternalTransfer(investmentCategory, paypal, ledger, new Date(today - oneDay * 13), -19000, 0.5, null),
            this.transactionsApi.newInternalTransfer(investmentCategory, paypal, binance, new Date(today - oneDay * 13), -1000, 0.3, null),

            this.transactionsApi.newTransaction(goodsCategory, paypal, new Date(today - oneDay * 12), -515, null),
            this.transactionsApi.newTransaction(healthcareCategory, paypal, new Date(today - oneDay * 12), -526, null),

            this.transactionsApi.newTransaction(goodsCategory, paypal, new Date(today - oneDay * 11), -345, null),
            this.transactionsApi.newTransaction(entertainmentCategory, paypal, new Date(today - oneDay * 11), -621, null),

            this.transactionsApi.newTransaction(goodsCategory, paypal, new Date(today - oneDay * 10), -124, null),

            this.transactionsApi.newTransaction(goodsCategory, paypal, new Date(today - oneDay * 9), -235, null),

            this.transactionsApi.newTransaction(goodsCategory, paypal, new Date(today - oneDay * 8), -652, null),
            this.transactionsApi.newTransaction(entertainmentCategory, paypal, new Date(today - oneDay * 8), -721, null),

            this.transactionsApi.newTransaction(goodsCategory, paypal, new Date(today - oneDay * 7), -637, null),
            this.transactionsApi.newTransaction(apparelCategory, paypal, new Date(today - oneDay * 7), -715, null),

            this.transactionsApi.newTransaction(goodsCategory, paypal, new Date(today - oneDay * 6), -833, null),
            this.transactionsApi.newInternalTransfer(investmentCategory, binance, cash, new Date(today - oneDay * 6), -0.15, 2000, null),

            this.transactionsApi.newTransaction(goodsCategory, paypal, new Date(today - oneDay * 5), -942, null),
            this.transactionsApi.newTransaction(healthcareCategory, paypal, new Date(today - oneDay * 5), -415, null),

            this.transactionsApi.newTransaction(goodsCategory, paypal, new Date(today - oneDay * 4), -325, null),

            this.transactionsApi.newTransaction(goodsCategory, paypal, new Date(today - oneDay * 3), -634, null),

            this.transactionsApi.newTransaction(goodsCategory, paypal, new Date(today - oneDay * 2), -753, null),
            this.transactionsApi.newTransaction(entertainmentCategory, paypal, new Date(today - oneDay * 2), -235, null),

            this.transactionsApi.newTransaction(goodsCategory, paypal, new Date(today - oneDay), -179, null),
            this.transactionsApi.newTransaction(travelCategory, paypal, new Date(today - oneDay), -15000, null),
        ]);
    }
}