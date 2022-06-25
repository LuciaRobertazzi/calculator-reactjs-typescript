import React from 'react';
import Button from './styles';

interface ActionButtonInterface {
  value: string;
  onClick: () => void;
  buttonType: 'number' | 'operation';
}

const ActionButton = ({
  value,
  onClick,
  buttonType,
}: ActionButtonInterface) => {
  return (
    <Button onClick={onClick} buttonType={buttonType}>
      {value}
    </Button>
  );
};

export default ActionButton;
