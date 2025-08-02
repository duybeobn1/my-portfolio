import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              {t('about.greeting')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('about.description2')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-indigo-50 rounded-xl p-8 shadow-lg border border-indigo-100">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {t('about.skills')}
            </h3>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-700">
                  {t('about.frontend')}
                </span>
                <p className="text-gray-600">
                  React, Angular, JavaScript, TypeScript, Tailwind CSS
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  {t('about.backend')}
                </span>
                <p className="text-gray-600">
                  Spring Boot, Node.js, Python, FastAPI
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">{t('about.tools')}</span>
                <p className="text-gray-600">Git, Docker, PostgreSQL, AWS</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  {t('about.aiData')}
                </span>
                <p className="text-gray-600">
                  Scikit-learn, NumPy, Pandas, TensorFlow, Vision Transformers
                  (ViT)
                </p>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default AboutPage;
