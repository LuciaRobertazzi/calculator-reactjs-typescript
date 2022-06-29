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
    <Button onClick={onClick} buttonType={buttonType} dangerouslySetInnerHTML={{ __html: `${value}` }} />
  );
};

export default ActionButton;
