import { type } from "os";

interface IAttributesProps {
  comment: string;
  deadline: string;
  description: string;
  priority: string;
  status: string;
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

export type { ITaskProps };
