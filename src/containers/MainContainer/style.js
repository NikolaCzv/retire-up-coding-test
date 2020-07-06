import styled from 'styled-components';

const colors = {
    headerColor: '#48D1CC',
    hoverColor: '#F5F5F5',
    borderColor: '#DDDDDD',
    headerFontColor: '#FFFFFF'
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
`;

export const FilterWrapper = styled.div``;

export const FilterHeader = styled.h3``;

export const YearHeader = styled.h4``;

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;
`;

export const THead = styled.thead``;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
    padding: 12px 5px;
    text-align: left;
    background-color: ${colors.headerColor};
    color: ${colors.headerFontColor}
`;

export const TBody = styled.tbody``;

export const TableElement = styled.td`
    border: 1px solid ${colors.borderColor};
    padding: 8px;
    ${TableRow}:hover & {
        background-color: ${colors.hoverColor}
    }
`;