export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="text-lg font-bold">允雷</p>
            <p className="text-sm text-gray-500 mt-1">
              AI商業系統架構師
            </p>
          </div>
          <div className="text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} 允雷. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
