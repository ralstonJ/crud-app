import { CrudUserListPage } from './app.po';

describe('crud-user-list App', () => {
  let page: CrudUserListPage;

  beforeEach(() => {
    page = new CrudUserListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
