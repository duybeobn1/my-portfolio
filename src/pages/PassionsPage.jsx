import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import RecipeModal from "../components/RecipeModal";

const PassionsPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("cooking");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);

  const openRecipeModal = (recipeKey) => {
    setSelectedRecipe(recipeKey);
    setIsRecipeModalOpen(true);
  };

  const closeRecipeModal = () => {
    setIsRecipeModalOpen(false);
    setSelectedRecipe(null);
  };

  // Placeholder data - you can replace these with your actual images and content
  const cookingImages = [
    {
      id: 1,
      src: "/images/cooking/dish1.jpg", // You'll need to add these images
      alt: "Vietnamese Pho",
      title: "Traditional Vietnamese Pho",
      description: "A soul-warming bowl of traditional pho with 12-hour bone broth",
      recipe: "pho"
    },
    {
      id: 2,
      src: "/images/cooking/dish2.jpg",
      alt: "French Pastry",
      title: "French Croissant",
      description: "Buttery, flaky croissants made from scratch with French technique",
      recipe: "croissant"
    },
    {
      id: 3,
      src: "/images/cooking/dish3.jpg",
      alt: "Fusion Dish",
      title: "East-West Fusion",
      description: "My signature fusion dish combining Vietnamese flavors with French technique",
      recipe: "fusion"
    }
  ];

  const lionDanceImages = [
    {
      id: 1,
      src: "/images/liondance/performance1.jpg",
      alt: "Lion Dance Performance",
      title: "Chinese New Year Performance 2024",
      description: "Leading a traditional lion dance performance for Chinese New Year celebrations"
    },
    {
      id: 2,
      src: "/images/liondance/performance2.jpg",
      alt: "Lion Dance Training",
      title: "Training Session",
      description: "Practicing the intricate movements and coordination required for lion dance"
    }
  ];

  const musicContent = [
    {
      id: 1,
      instrument: "Piano",
      description: "Classical and contemporary pieces, with a focus on Vietnamese folk adaptations",
      experience: "8+ years"
    },
    {
      id: 2,
      instrument: "Traditional Vietnamese Instruments",
      description: "Dan bau (monochord) and dan tranh (zither) for cultural performances",
      experience: "5+ years"
    }
  ];

  const tabs = [
    { id: "cooking", name: t("passions.tabs.cooking"), icon: "🍳" },
    { id: "liondance", name: t("passions.tabs.lionDance"), icon: "🦁" },
    { id: "music", name: t("passions.tabs.music"), icon: "🎵" },
    { id: "philosophy", name: t("passions.tabs.philosophy"), icon: "💭" }
  ];

  const renderCookingSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Cooking Philosophy */}
      <motion.div whileHover={{ y: -6 }} className="bg-minimal rounded-xl p-8 border border-line card-hover card-hover-pink">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">👨‍🍳</span>
          <span className="hl-bar hl-pink">{t("passions.cooking.philosophy.title")}</span>
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg italic">
          "{t("passions.cooking.philosophy.quote")}"
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed">
          {t("passions.cooking.philosophy.description")}
        </p>
      </motion.div>

      {/* Professional Experience */}
      <motion.div whileHover={{ y: -6 }} className="bg-minimal rounded-xl p-8 border border-line card-hover card-hover-yellow">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {t("passions.cooking.experience.title")}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900">
                {t("passions.cooking.experience.consultant")}
              </h4>
              <p className="text-gray-600">
                A Bản Mountain Dew (Michelin Guide) & Dana Vegan House
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">
                {t("passions.cooking.experience.chef")}
              </h4>
              <p className="text-gray-600">
                Le Grand Réfectoire - Chef de partie (entrées et tapas)
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              {t("passions.cooking.experience.education")}
            </h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Le Cordon Bleu</li>
              <li>• Hong Kong University - Science of Gastronomy</li>
              <li>• Institut Paul Bocuse</li>
            </ul>
          </div>
        </div>
</motion.div>

      {/* Cooking Gallery */}
      <motion.div whileHover={{ y: -6 }} className="bg-minimal rounded-xl p-8 border border-line card-hover card-hover-blue">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {t("passions.cooking.gallery.title")}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {cookingImages.map((image) => (
            <motion.div
              key={image.id}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
              onClick={() => openRecipeModal(image.recipe)}
            >
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/300x200/f59e0b/white?text=${encodeURIComponent(image.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium text-gray-800">View Recipe</span>
                  </div>
                </div>
              </div>
              <h4 className="font-semibold text-gray-900">{image.title}</h4>
              <p className="text-gray-600 text-sm">{image.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  const renderLionDanceSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Lion Dance Introduction */}
      <motion.div whileHover={{ y: -6 }} className="bg-minimal rounded-xl p-8 border border-line card-hover card-hover-yellow">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🦁</span>
          <span className="hl-bar hl-yellow">{t("passions.lionDance.intro.title")}</span>
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          {t("passions.lionDance.intro.description")}
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              {t("passions.lionDance.skills")}
            </h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Traditional Lion Head Movement</li>
              <li>• Acrobatic Choreography</li>
              <li>• Cultural Performance Direction</li>
              <li>• Team Coordination & Leadership</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              {t("passions.lionDance.performances")}
            </h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Chinese New Year Celebrations</li>
              <li>• Cultural Festivals</li>
              <li>• Community Events</li>
              <li>• Corporate Celebrations</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Performance Gallery */}
      <motion.div whileHover={{ y: -6 }} className="bg-minimal rounded-xl p-8 border border-line card-hover card-hover-blue">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {t("passions.lionDance.gallery.title")}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {lionDanceImages.map((image) => (
            <motion.div
              key={image.id}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x300/ef4444/white?text=${encodeURIComponent(image.title)}`;
                  }}
                />
              </div>
              <h4 className="font-semibold text-gray-900">{image.title}</h4>
              <p className="text-gray-600 text-sm">{image.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  const renderMusicSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <motion.div whileHover={{ y: -6 }} className="bg-minimal rounded-xl p-8 border border-line card-hover card-hover-blue">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎵</span>
          {t("passions.music.intro.title")}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          {t("passions.music.intro.description")}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {musicContent.map((item) => (
            <div
              key={item.id}
              className="bg-minimal p-6 rounded-lg border border-line"
            >
              <h4 className="font-semibold text-gray-900 text-lg mb-2">
                {item.instrument}
              </h4>
              <p className="text-gray-600 mb-3">{item.description}</p>
              <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                {item.experience}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  const renderPhilosophySection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <motion.div whileHover={{ y: -6 }} className="bg-minimal rounded-xl p-8 border border-line card-hover card-hover-blue">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-3">💭</span>
          <span className="hl-bar hl-blue">{t("passions.philosophy.title")}</span>
        </h3>
        
        <div className="space-y-8">
          {/* Life Philosophy */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {t("passions.philosophy.life.title")}
            </h4>
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-indigo-400 pl-6 py-2">
              "{t("passions.philosophy.life.quote")}"
            </blockquote>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {t("passions.philosophy.life.description")}
            </p>
          </div>

          {/* Work Philosophy */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {t("passions.philosophy.work.title")}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {t("passions.philosophy.work.description")}
            </p>
          </div>

          {/* Cultural Bridge */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {t("passions.philosophy.cultural.title")}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {t("passions.philosophy.cultural.description")}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const renderActiveSection = () => {
    switch (activeTab) {
      case "cooking":
        return renderCookingSection();
      case "liondance":
        return renderLionDanceSection();
      case "music":
        return renderMusicSection();
      case "philosophy":
        return renderPhilosophySection();
      default:
        return renderCookingSection();
    }
  };

  return (
    <main className="relative bg-minimal text-default min-h-screen overflow-x-hidden">
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              <span className="hl-bar hl-yellow">{t("passions.title")}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("passions.subtitle")}
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12 border-t border-b border-line py-4"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 border border-line ${
                  activeTab === tab.id
                    ? "bg-[var(--yellow)]"
                    : "bg-minimal hover:bg-[rgba(218,227,243,0.3)]"
                }`}
              >
                <span className="text-lg mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </motion.div>

          {/* Active Section Content */}
          <div className="min-h-[600px]">
            {renderActiveSection()}
          </div>
        </div>
      </section>
      
      {/* Recipe Modal */}
      <RecipeModal 
        isOpen={isRecipeModalOpen}
        onClose={closeRecipeModal}
        recipe={selectedRecipe}
      />
    </main>
  );
};

export default PassionsPage;
