interface IAtributesProps {
  action: string;
  checklist: string;
  folder: string;
  initial_atendee: string;
  note: string;
  number: number;
  pending_document: string;
  procedure: string;
  rate_fixed: string;
  rate_parceled_exfield: string;
  rate_percentage: string;
  rate_percentage_exfield: string;
  subject: string;
}

interface IRelationshipsProps {
  checklists: any;
  jobs: any;
  perdlaunch: any;
  powers: any;
  profile_customers: any;
  recommendation: any;
  tributary: any;
}

interface IWorkProps {
  id: string;
  type: string;
  attributes: IAtributesProps;
  relationships: IRelationshipsProps;
}

export type { IWorkProps };
