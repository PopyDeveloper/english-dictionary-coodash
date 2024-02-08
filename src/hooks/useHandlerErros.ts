export const useHandlerErrors = () => {
  const showError = ({title, message}: {title: string; message: string}) => {
    console.error(title, message);
  };
  return {
    showError,
  };
};
