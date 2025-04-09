// Task1
interface IEmployee {
  name: string;
  salary: number;
  isManager: boolean;
}

const QA: IEmployee = {
  name: 'Dmitrii',
  salary: 3000,
  isManager: false,
};

type EmployeeKeys = keyof IEmployee;
type QaKeys = keyof typeof QA;
type UserType = typeof QA;
type OptionalEmployee = Partial<IEmployee>;
type NameAndSalary = Pick<IEmployee, 'name' | 'salary'>;
type WithoutIsManager = Omit<IEmployee, 'isManager'>;
type ReadonlyIsManager = Readonly<IEmployee>;
type QAKeys = keyof typeof QA;
type MyRecord = Record<string, QAKeys>;
const someMap: MyRecord = {
  key1: 'name',
  key2: 'salary',
  somethingElse: 'isManager',
};

function wrapInArray<T>(value: T): T[] {
  return [value];
}

function getLastElement<T>(arr: T[]): T | undefined {
  return arr.at(-1);
}
