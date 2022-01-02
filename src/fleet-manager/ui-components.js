import styled from '@emotion/styled';
import Colors from '../colors';


export const MutedLabel = styled.div`
  padding-bottom: ${props => props.paddingBottom ? props.paddingBottom + 'px' : '10px'};
  color: ${Colors.grey50}
`;
export const BoldLabel = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
