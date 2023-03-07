import { UserAuth } from "./userauth";
describe('UserAuth',() => {
    it('should create an instance', () => {
      expect(new UserAuth(1,"olfa","zaouali","olfazaouali7@gmail.com","olfa123","user")).toBeTruthy();
    });
  });