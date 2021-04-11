import * as S from './styles'
const Main = ({
  title = 'boilerplate next project',
  description = 'This project is a boilerplate using TypeScript, RecatJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.png" alt="Imagem de um leão." />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com codigos."
    />
  </S.Wrapper>
)
export default Main
