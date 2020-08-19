/**
* @author lmarin
* @date: 01/02/2020
* */
export class Paginator {
    private page: number;
    private pageUp = 0;
    private limitByPage: number;
    private totalRow: number = null;
    private scrollMe: any;
    private isInitPage = false;
    private initTopScroll = 0;

    constructor(
        page: 0,
        limitByPage: number = 20,
        initTopScroll: number = 0
    ) {
        this.page = page;
        this.limitByPage = limitByPage;
        this.initTopScroll = initTopScroll;
    }

    public paginateDown(scrollMe, call: (any)) {
        this.scrollMe = scrollMe;
        const maxScrollPosition = scrollMe.scrollHeight - scrollMe.clientHeight;
        if (scrollMe.scrollTop >= maxScrollPosition) {
            if (this.otherPage()) {
                call(this.page, this.limitByPage);
            }
        }
    }

    public paginateDownFromLibrary(call: (any)) {
        if (this.otherPage()) {
            call(this.page, this.limitByPage);
        }
    }

    public paginateUp(scrollMe, call: (any)) {
        if (scrollMe.scrollTop === 0) {
            if (this.pageUp > 0) {
                --this.pageUp;
                call(this.pageUp);
                setTimeout(() => {
                    scrollMe.scrollTop = this.initTopScroll;
                }, 400);
            }
        }
    }

    public getCurrentPageUp(): number {
        return this.pageUp;
    }

    public setCurrentPageUp(currentPage: number) {
        if (!this.isInitPage) {
            this.pageUp = currentPage;
            this.page = currentPage;
            this.isInitPage = true;
        }
    }

    public isPresentUser(): boolean {
        return this.isInitPage;
    }

    public setTotalRowFromService(totalRow) {
        this.totalRow = totalRow;
    }

    public getTotalRowFromService() {
        return !!this.totalRow ? this.totalRow : 0;
    }

    public resetPaginator(initPage = 0, scrollMe: any = null) {
        this.page = initPage;
        if (scrollMe !== null) {
            scrollMe.scrollTop = this.initTopScroll;
            this.isInitPage = false;
        }
    }

    public getItemsCount(): number {
        return (this.page + 1) * this.limitByPage;
    }

    public getCurrentPage(): number {
        return this.page;
    }

    private otherPage(): boolean {
        if ((this.page + 1) * this.limitByPage < this.totalRow) {
            ++this.page;
            return true;
        } else {
            return false;
        }
    }
}
