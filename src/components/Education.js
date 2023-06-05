import { TableContainer,Table,TableHead,TableRow,TableCell,TableBody } from '@mui/material'
import React from 'react'

function createData(
  qualification: string,
  year: number,
  school: string,
  board: string,
  mark: number,
) {
  return { qualification, year, school, board, mark };
}

const Education = () => {
  const rows = [
    createData('SSLC', 2017, 'KHSS THOTTARA', 'STATE BOARD OF EXAMINATIONS,KERALA', 99),
    createData('PLUS TWO', 2019, 'KHSS THOTTARA', 'BOARD OF HIGHER SECONDARY EXAMINATIONS,KERALA', 86),
    createData('DIPLOMA IN COMPUTER ENGINEERING', 2021, 'IPT AND GPTC SHORANUR', 'STATE BOARD OF TECHNICAL EDUCATION,KERALA', 8.5),
    createData('BTECH', 2024, 'COLLAGE OF ENGINEERING TRIVANDRUM', 'APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY', 7.3),
  ];
  return (
    <div className='App' style={{paddingTop:'10px'}}>
      <br />
      <h2 className='App'>Qualification Detials</h2>
      <br />
      <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>QUALIFICATION</TableCell>
            <TableCell align="right">YEAR</TableCell>
            <TableCell align="center">SCHOOL/COLLAGE</TableCell>
            <TableCell align="center">BOARD/UNIVERSITY</TableCell>
            <TableCell align='left'>MARK PERCENTAGE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            key={row.qualification}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.qualification}
              </TableCell>
              <TableCell align="center">{row.year}</TableCell>
              <TableCell align='center'>{row.school}</TableCell>
              <TableCell align="center">{row.board}</TableCell>
              <TableCell align="center">{row.mark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </div>
  )
}

export default Education