interface IAddressProps {
  description: string;
  zip_code: string;
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
}

interface IBankAccountProps {
  bank: string;
  state: string;
  agency: string;
  account: string;
  operation?: any;
}

interface IEmailProps {
  email: string;
}

interface IPhoneProps {
  phone: string;
}

interface IClientProps {
  type: string;
  name: string;
  lastname: string;
  gender: string;
  rg: string;
  cpf: string;
  cnpj?: any;
  nationality?: any;
  civil_status: string;
  capacity: string;
  profession?: any;
  company?: any;
  birth: string;
  mother_name: string;
  number_benefit: string;
  status: number;
  document?: any;
  nit?: any;
  inss_password?: any;
  invalid_person?: any;
  addresses: IAddressProps[];
  bank_accounts: IBankAccountProps[];
  emails: IEmailProps[];
  phones: IPhoneProps[];
}

export type { IClientProps };
