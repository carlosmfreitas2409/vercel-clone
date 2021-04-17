import { Container } from './styles';

interface SectionHeaderProps {
  color: 'blue' | 'pink';
  labelNumber: number;
  labelTitle: string;
  title: string;
}

export function SectionHeader({
  color,
  labelNumber,
  labelTitle,
  title,
}: SectionHeaderProps) {
  return (
    <Container color={color}>
      <div>
        <span />
        <span>{labelNumber}</span>
      </div>

      <h3>{labelTitle}</h3>
      <h4>{title}</h4>
    </Container>
  );
};
