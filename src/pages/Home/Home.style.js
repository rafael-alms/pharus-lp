import styled from'styled-components';

export const Container = styled.div`
  @media (min-width: 769px) {
    .inicio {
      background: linear-gradient(180deg, #D3633A 0%, #FDDCA1 100%);
      height: 100%;
    }
    
    .description {
      background: linear-gradient(180deg, #FDDCA1 30.73%, #CFA4F5 59.37%, #C082F1 81.77%, #792DE9 100%);
      height: 100%;
    }

    .statistics {
      background: #792DE9;
      height: 100%;
    }

    .depositions {
      background: linear-gradient(180.79deg, #792DE9 0.59%, #C3104A 99.24%);
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    .inicio {
      background: linear-gradient(180deg, #D3633A 0%, #FDDCA1 100%);
      height: 100%;
    }

    .description {
      background: linear-gradient(180deg, #FDDCA1 30.73%, #CFA4F5 59.37%, #C082F1 81.77%, #792DE9 100%);
      height: 100%;
      margin-top: -90px;
      padding-bottom: 48px;
    }

    .statistics {
      background: #792DE9;
      height: 100%;
      margin-top: -1px;
    }

    .depositions {
      background: linear-gradient(180.79deg, #792DE9 0.59%, #C3104A 99.24%);
      height: 100%;
      margin-top: -1px;
    }
  }
`;