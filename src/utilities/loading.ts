const loadingClassName = 'isLoading';

export const loading = {
  start() {
    document.body.classList.add(loadingClassName);
  },
  end() {
    document.body.classList.remove(loadingClassName);
  }
}