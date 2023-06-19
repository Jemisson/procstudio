interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  handleSave: (title: string) => void;
}

export type { IModalProps };
