interface IAttributesProps {
  id: string;
  comment: string;
  deadline: string;
  description: string;
  priority: string;
  status: string;
  customer_id: string;
  profile_admin_id: string;
  work_id: string;
}

interface IRelationshipsProps {
  works: any[];
}

interface ITaskProps {
  id: string;
  type: string;
  attributes: IAttributesProps;
  relationships: IRelationshipsProps;
}

export type { ITaskProps, IAttributesProps };
