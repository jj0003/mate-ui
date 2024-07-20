
type ToggleSwitchProps = {
  isOn: boolean;
  handleToggle: () => void;
};

const ToggleSwitch = ({ isOn, handleToggle }: ToggleSwitchProps) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
        className="sr-only"
        id="toggle-switch"
      />
      <label htmlFor="toggle-switch" className="cursor-pointer">
        <div
          className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${
            isOn ? 'bg-blue-500' : ''
          }`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
              isOn ? 'translate-x-6 bg-black' : ''
            }`}
          />
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
