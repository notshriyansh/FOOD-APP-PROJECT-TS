interface UserProps {
  name: string;
}

const User = ({ name }: UserProps) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-6 text-center mt-8">
      <h2 className="text-2xl font-bold text-brand-primary">{name}</h2>
      <h3 className="text-gray-500 mt-2">Made with React</h3>
    </div>
  );
};

export default User;
