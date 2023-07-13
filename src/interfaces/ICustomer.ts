interface IAddressDataProps {
  id: string;
  type: string;
  description: string;
  zip_code: string;
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
}

interface IAddressProps {
  data: IAddressDataProps[];
}

interface IBankDataProps {
  id: string;
  type: string;
  bank: string;
  state: string;
  agency: string;
  account: string;
  operation?: any;
}

interface IBankAccountProps {
  data: IBankDataProps[];
}

interface IEmailDataProps {
  id: string;
  type: string;
  email: string;
}

interface IEmailProps {
  data: IEmailDataProps[];
}

interface IPhoneDataProps {
  id: string;
  type: string;
  phone: string;
}

interface IPhoneProps {
  data: IPhoneDataProps[];
}

interface IAttributesProps {
  id: string;
  name: string;
  customer_type: string;
  status: number;
  customer_id: number;
  last_name: string;
  cpf: string;
  rg: string;
  birth: string;
  gender: string;
  cnpj?: string;
  civil_status: string;
  nationality?: any;
  capacity: string;
  profession?: string;
  company?: string;
  number_benefit: string;
  nit?: string;
  mother_name: string;
}

interface IRelationshipsProps {
  addresses: IAddressProps[];
  bank_accounts: IBankAccountProps[];
  emails: IEmailProps[];
  phones: IPhoneProps[];
}

interface ICustomerProps {
  id: string;
  type: string;
  attributes: IAttributesProps;
  relationships: IRelationshipsProps;
}

export type { ICustomerProps };
