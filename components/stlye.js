const colors = {
  // Ana renkler
  primary: '#7C3AED',    // Ana mor
  primaryLight: '#D1B2FF', // Açık mor
  primaryDark: '#5B21B6',  // Koyu mor
  
  // Arka plan renkleri
  background: {
    dark: '#0F172A',     // Ana arka plan
    card: '#1E293B',     // Kart arka planı
    elevated: '#2D3748'   // Yükseltilmiş elementler
  },
  
  // Metin renkleri
  text: {
    primary: '#F8FAFC',   // Ana metin
    secondary: '#E2E8F0', // İkincil metin
    tertiary: '#94A3B8',  // Üçüncül metin
    accent: '#D1B2FF'     // Vurgulu metin
  },
  
  // Durum renkleri
  state: {
    error: '#EF4444',    // Hata
    success: '#10B981',  // Başarı
    warning: '#F59E0B'   // Uyarı
  }
};

const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  }
};

const styles = {
  // Container Styles
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background.dark,
    minHeight: '100vh',
  },
  
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.dark,
    padding: 20,
  },

  // Card Styles
  card: {
    backgroundColor: colors.background.card,
    borderRadius: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: `${colors.primaryLight}15`,
    overflow: 'hidden',
    ...shadows.medium,
    transform: [{ translateY: 0 }], // For hover animation preparation
  },

  cardContent: {
    padding: 24,
  },

  // Typography Styles
  header: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text.accent,
    marginBottom: 28,
    letterSpacing: 0.7,
    textShadowColor: 'rgba(124, 58, 237, 0.1)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text.accent,
    marginBottom: 16,
    letterSpacing: 0.5,
    lineHeight: 32,
  },

  detailTitle: {
    fontSize: 40,
    fontWeight: '800',
    color: colors.text.accent,
    marginBottom: 28,
    letterSpacing: 0.7,
    lineHeight: 48,
    textShadowColor: 'rgba(124, 58, 237, 0.1)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },

  excerpt: {
    color: colors.text.secondary,
    marginBottom: 20,
    lineHeight: 26,
    fontSize: 16,
    letterSpacing: 0.3,
  },

  content: {
    color: colors.text.secondary,
    marginBottom: 28,
    lineHeight: 30,
    fontSize: 17,
    letterSpacing: 0.3,
  },

  // Date Container Styles
  dateContainer: {
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    flexWrap: 'wrap',
  },

  dateText: {
    color: colors.text.tertiary,
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.2,
  },

  // Icon Styles
  icon: {
    width: 18,
    height: 18,
    color: colors.text.tertiary,
    marginRight: 8,
  },

  clockIcon: {
    marginLeft: 20,
    color: colors.text.tertiary,
  },

  // Button Styles
  bookmarkButton: {
    ...shadows.small,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
   
  },

  backButton: {
    marginTop: 28,
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    width: 140,
    ...shadows.small,
  },

  retryButton: {
    padding: 16,
    backgroundColor: colors.primaryLight,
    borderRadius: 12,
    ...shadows.small,
    minWidth: 140,
    alignItems: 'center',
  },

  // Button Text Styles
  bookmarkText: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginLeft: 10,
  },

  backButtonText: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  retryText: {
    color: colors.background.dark,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  // Error Styles
  errorText: {
    color: colors.state.error,
    fontSize: 16,
    marginBottom: 24,
    fontWeight: '500',
    letterSpacing: 0.3,
    textAlign: 'center',
  },

  // Blog Styles
  blogContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.background.card,
    ...shadows.large,
  },

  blogContent: {
    color: colors.background.card,
    fontSize: 17,
    padding: 28,
    backgroundColor: `${colors.primaryLight}10`,
    minHeight: 200,
    borderRadius: 12,
    lineHeight: 28,
    letterSpacing: 0.3,
  },
  headerContainer: {
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerIcon: {
    width: 24,
    height: 24,
    color: colors.primaryLight,
  },

  emptyStateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    backgroundColor: colors.background.card,
    borderRadius: 16,
    marginTop: 24,
    borderWidth: 1,
    borderColor: `${colors.primaryLight}15`,
    ...shadows.medium,
  },

  emptyStateText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.accent,
    marginBottom: 8,
    textAlign: 'center',
  },

  emptyStateSubText: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
  },

  emptyListContainer: {
    flex: 1,
  },

  bookmarkActionButton: {
    position: 'absolute',
    right: 16,
    top: 16,
    backgroundColor: `${colors.primary}80`,
    borderRadius: 8,
    padding: 8,
    ...shadows.small,
  }
};

export default styles;