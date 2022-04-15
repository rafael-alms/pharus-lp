import styled from'styled-components';

export const Container = styled.div`
  @media (min-width: 769px) {
    .header {
        background: linear-gradient(90.16deg, #D3633A -1.48%, #FCBA7A 99.88%);
    }

    .inicio {
        background: linear-gradient(90.16deg, #D3633A -1.48%, #FCBA7A 99.88%);
        height: 100%;
    }
    
    .description {
        
  }

    .statistics {
      background: #FDA049;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    .header {
        background: linear-gradient(90.16deg, #D3633A -1.48%, #FCBA7A 99.88%);
    }

    .inicio {
        background: linear-gradient(90.16deg, #D3633A -1.48%, #FCBA7A 99.88%);
        height: 100%;
        margin-top: -80px;
    }
  }
`;