import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('main rendering tests', () => {
  it('il componente Welcom viene montato correttamente', () => {
    render(<App />)
    const mainHeader = screen.getByRole('heading', {
      name: /Horror EpiBooks/i,
    })
    expect(mainHeader).toBeInTheDocument()
  })

  it('tutto le card vengono montate correttamente', () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('book-card')
    expect(allTheBookCards).toHaveLength(150)
  })

  it('il componente CommentArea viene renderizzato correttamente', () => {
    render(<App />)
    const reviewInputField = screen.getByPlaceholderText(
      /inserisci qui il testo/i
    )
    expect(reviewInputField).toBeInTheDocument()
  }) 
})

describe('filter test', () => {
  it("finds just one result for the word 'girl'", () => {
    render(<App />)
    const filterInputField = screen.getByPlaceholderText(/cerca un libro/i)
    fireEvent.change(filterInputField, { target: { value: 'girl' } })
    const allTheBookCards = screen.getAllByTestId('book-card')
    expect(allTheBookCards).toHaveLength(1)
  }) 

  it("finds three results for the word 'collected'", () => {
    render(<App />)
    const filterInputField = screen.getByPlaceholderText(/cerca un libro/i)
    fireEvent.change(filterInputField, { target: { value: 'collected' } })
    const allTheBookCards = screen.getAllByTestId('book-card')
    expect(allTheBookCards).toHaveLength(3)
  })
}) 

describe('SingleBook test', () => {
  it('al click sulla card il bordo cambia colore', () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('book-card')
    const firstBookCard = allTheBookCards[0]
    fireEvent.click(firstBookCard)
    expect(firstBookCard).toHaveStyle('border: 3px solid red')
  }) 

  it('cliccando su una seconda card il bordo della prima torna normale', () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('book-card')
    const firstBookCard = allTheBookCards[0]
    fireEvent.click(firstBookCard)
    expect(firstBookCard).toHaveStyle('border: 3px solid red')
    const secondBookCard = allTheBookCards[1]
    fireEvent.click(secondBookCard)
    expect(firstBookCard).not.toHaveStyle('border: 3px solid red')
  }) 
})

describe('CommentList test', () => {
  it('quando la pagina si carica non ci sono commenti', () => {
    render(<App />)
    const allTheBookComments = screen.queryAllByTestId('single-comment')
    expect(allTheBookComments).toHaveLength(0)
  }) 

  it('quando selezioni un libro veiene visualizzata la sua recensione', async () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('book-card')
    const firstBookCard = allTheBookCards[0]
    fireEvent.click(firstBookCard)
    const allTheBookComments = await screen.findAllByTestId('single-comment')
    expect(allTheBookComments).not.toHaveLength(0)
  })

  
})
