import { IAttributesProps } from './ITask';

interface IModalProps {
  isOpen: boolean;
  dataToEdit?: IAttributesProps;
  onClose: () => void;
}

export type { IModalProps };
