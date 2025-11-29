import { Button } from '@mui/material';

type ButtonLinkProps = {
  btnText: string;
  href?: string;
  btnAction: () => void;
};

export default function ButtonLink({ btnText, btnAction }: ButtonLinkProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={btnAction}
    >
      { btnText }
    </Button>
  );
}