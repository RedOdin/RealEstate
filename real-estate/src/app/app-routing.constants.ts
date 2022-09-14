export const APP_ROUTE = {
  DEFAULT: '',
  HOME: {
    name: 'home',
    route(): string[] {
      return ['/' + this.name];
    }
  },
  DETAILS: {
    name: 'details',
    route(): string[] {
      return ['/' + this.name];
    }
  },
};
