import * as S from './styles'
const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.png" alt="Imagem de um leão." />
    <S.Title>boilerplate next project</S.Title>
    <S.Description>
      This project is a boilerplate using TypeScript, RecatJS, NextJS and Styled
      Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com codigos."
    />
  </S.Wrapper>
)
export default Main
