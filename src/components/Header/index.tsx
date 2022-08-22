import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src="/assets/viniflix_logo.png" alt="Logo Viniflix" />
        <nav>
          <ul>
            <li>Filmes</li>
            <li>Séries</li>
            <li>Novidades</li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
}
