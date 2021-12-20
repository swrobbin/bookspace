class BooksController < ApplicationController
    before_action :authorize
    # before_action :logged_in?

    def index
        books = current_user.books
        render json: books
    end

    def create
        book = current_user.books.create(book_params)
        if book.valid?
            render json: book
        else
            render json: { errors: book.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        book = current_user.books.find_by(id: params[:id])
        if book
            render json: book
        else
            render json: { error: "Not found"}, status: :unauthorized
        end

    end

    def destroy
        book = current_user.books.find_by(id: params[:id])
        current_user.books.destroy(book)
    end

    def update
        book = current_user.books.find_by(id: params[:id])
        book.update(book_params)
        if book.valid?
            render json: book
        else
            render json: { errors: book.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def current_user
        user = User.find_by(id: session[:user_id])
    end

    def book_params
        params.permit(:title, :author, :pages, :notes)
    end

    def authorize
        return render json: { error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
