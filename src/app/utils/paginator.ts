export class Paginator {
  private page: number;
  private pageUp = 0;
  private limitByPage: number;
  private totalRow: number;
  private scrollMe: any;
  private isInitPage = false;
  private initTopScroll = 0;

  constructor(
    page: 0,
    limitByPage = 20,
    initTopScroll = 0
  ) {
    this.page = page;
    this.limitByPage = limitByPage;
    this.initTopScroll = initTopScroll;
  }

  public paginateDown(scrollMe, call: (any)) {
    this.scrollMe = scrollMe;
    const maxScrollPosition = scrollMe.scrollHeight - scrollMe.clientHeight;
    console.log(scrollMe.scrollTop, maxScrollPosition);
    if (scrollMe.scrollTop >= maxScrollPosition - 30) {
      if (this.otherPage()) {
        call(this.page);
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

  /**
   * @author: lmarin
   * @example
   * // settotalRowFromService(5)
   */
  public setTotalRowFromService(totalRow) {
    this.totalRow = totalRow;
  }

  public resetPaginator(initPage = 0, scrollMe: any = null) {
    this.page = initPage;
    if (scrollMe !== null) {
      scrollMe.scrollTop = this.initTopScroll;
      this.isInitPage = false;
    }
  }

  private otherPage(): boolean {
    ++this.page;
    return this.page * this.limitByPage < this.totalRow;
  }
}
